const generateRepeatColor = async (colorArr: string[], length: number) => {

    let tmpColorArr: string[] = [];
    let tmpIndex = 0;

    for (let i = 0; i < length; i++) {
        if (tmpIndex > colorArr.length - 1)
            tmpIndex = 0;
        tmpColorArr.push(colorArr[tmpIndex++]);
    }

    return tmpColorArr;

}


const randomColorsFromArr = (colorArr: string[]) => {
    return colorArr[Math.floor(Math.random() * colorArr.length)];
}



const shareColors = ['#d9f9fa', '#FFE4E9', '#CBFFEA', '#EAF6FF', '#FFEFB2', '#B6CFB6', '#FFD8BE']



const categorys = shareColors;







const colors = {
    categorys,
    shareColors,
    generateRepeatColor,
    randomColorsFromArr,
}

export default colors;