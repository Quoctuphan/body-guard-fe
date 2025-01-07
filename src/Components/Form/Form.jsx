import { Button, Form, Input, Space } from "antd";
import { useState, useEffect } from "react";
const SubmitButton = ({ form, children }) => {
  const [submittable, setSubmittable] = useState(false);

  // Watch all values
  const values = Form.useWatch([], form);
  useEffect(() => {
    form
      .validateFields({
        validateOnly: true,
      })
      .then(() => {
        setSubmittable(true)
      })
      .catch(() => setSubmittable(false));
  }, [form, values]);
  const handleOnclick = () => {
    alert("Submitted")
  }
  return (
    <Button type="primary" htmlType="submit" disabled={!submittable} onClick={handleOnclick}>
      {children}
    </Button>
  );
};
const Forms = ({data}) => {
  const [form] = Form.useForm();

  return (
    <Form form={form} name="validateOnly" layout="vertical" autoComplete="off" size="middle">
      {data.map((item, index) => {
        return (
          <div key={index}>
            <Form.Item
              name={item?.name || ""}
              label={item?.label || ""}
              rules={[
                {
                  required: item?.require || false,
                  message: item?.message || "" 
                },
              ]}
            >
              <Input type={item.type}/>
            </Form.Item>
          </div>
        );
      })}
      <Form.Item>
        <Space>
          <SubmitButton form={form}>Submit</SubmitButton>
          <Button htmlType="reset">Reset</Button>
        </Space>
      </Form.Item>
    </Form>
  );
};
export default Forms;
