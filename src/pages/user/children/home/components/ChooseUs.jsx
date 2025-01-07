

const Item = ({item}) =>{
    
    return(
        <div className="flex gap-[16px]  border-gradient border-gradient-hover 0 p-10 pt-[16px]">
            <img src={item.imgUrl} alt={item.imgAlt} className="size-[54px]" />
            <div className="flex flex-col gap-[6px]">
                <h2 className="md:text-[2rem]">{item.title}</h2>
                <p className="text-gray-600 md:text-[1.4rem] font-light">{item.subTitle}</p>
            </div>
        </div>
    )
}
export default function ChooseUs(){
 const itemData = [
    {
        imgUrl: "./icon/iItem1.png",
        imgAlt: "icon1",
        title: "Expertise in Security",
        subTitle: "Scelerisque pulvinar morbi felis odio ut mauris diam sit.",
    },
    {
        imgUrl: "./icon/iTem2.png",
        imgAlt: "icon1",
        title: "Expertise in Security",
        subTitle: "Scelerisque pulvinar morbi felis odio ut mauris diam sit.",
    },
    {
        imgUrl: "./icon/iItem3.png",
        imgAlt: "icon1",
        title: "Expertise in Security",
        subTitle: "Scelerisque pulvinar morbi felis odio ut mauris diam sit.",
    },
    {
        imgUrl: "./icon/iTem4.png",
        imgAlt: "icon1",
        title: "Expertise in Security",
        subTitle: "Scelerisque pulvinar morbi felis odio ut mauris diam sit.",
    },
    {
        imgUrl: "./icon/iTem5.png",
        imgAlt: "icon1",
        title: "Expertise in Security",
        subTitle: "Scelerisque pulvinar morbi felis odio ut mauris diam sit.",
    },
    {
        imgUrl: "./icon/iItem6.png",
        imgAlt: "icon1",
        title: "Expertise in Security",
        subTitle: "Scelerisque pulvinar morbi felis odio ut mauris diam sit.",
    },

 ]
 return(
    <div className="max-w-[1440px] mb-[60px] mx-auto">
        <h1 className=" mb-[30px] md:mb-[60px] text-[2.5rem] text-center lg:text-left ld:text-[3rem] font-semibold">Why Choose Us</h1>
        <div className="mx-auto max-w-[1140px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[81px] place-items-center ">
            {
                itemData?.map((item, index)=> {
                    return(
                        <Item key={index + 1} item={item}/>
                    )
                })
            }
        </div>
    </div>
 )
} 