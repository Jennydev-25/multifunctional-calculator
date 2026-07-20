import sunny from '@/assets/images/sky/sunny.png';
import cloudy from '@/assets/images/sky/cloudy.png';
import overcast from '@/assets/images/sky/overcast.png';
import rain from '@/assets/images/sky/rain.png';

const SKY_MAP = {
    '11': sunny,
    '12': sunny,
    '13': cloudy,
    '14': cloudy,
    '15': overcast,
    '43': rain,
    '26': rain,
};

export function skyIdToImage(skyId) {
    return SKY_MAP[skyId] ?? cloudy;
}