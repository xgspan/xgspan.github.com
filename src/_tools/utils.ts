import dayjs from "dayjs";

/**
 * 生成带固定透明度（0.15）的 RGBA 颜色
 * @param r 红色（0-255），不传则随机生成
 * @param g 绿色（0-255），不传则随机生成
 * @param b 蓝色（0-255），不传则随机生成
 * @param alpha
 * @returns `rgba(r, g, b, 0.15)` 格式的字符串
 */
export function generateRGBA(r?: number, g?: number, b?: number, alpha= 0.15): string {
    // 生成随机数（0-255）
    const random = () => Math.floor(Math.random() * 256);

    // 如果参数未传，则使用随机值
    const red = r ?? random();
    const green = g ?? random();
    const blue = b ?? random();

    // 固定透明度 0.15

    // 返回格式化字符串
    return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

/**
 * 当前时间 YYYY年M月D日
 */
export function day(){
    return  dayjs().format('YYYY年M月D日');
}