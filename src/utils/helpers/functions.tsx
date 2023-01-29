import Swal from 'sweetalert2'
import withReactContent from "sweetalert2-react-content";


export const swal = withReactContent(Swal)

export const moveElementArr = async (arr: any, currentIndex: number, toIndex: number) => {
    let tmpElement = arr[currentIndex];
    arr.splice(currentIndex, 1);
    arr.splice(toIndex, 0, tmpElement);

    return arr;
}
