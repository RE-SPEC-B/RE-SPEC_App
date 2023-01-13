const periodStarSVG = (periodString: string) => {
    switch (periodString) {
        case '1~4년차':
            return 'starLvOne';
        case '5~8년차':
                return 'starLvTwo';
        case '9~12년차':
            return 'starLvThree';
        case '13년차이상':
            return 'starLvFour';
        default:
            break;
    }
}

export default periodStarSVG;