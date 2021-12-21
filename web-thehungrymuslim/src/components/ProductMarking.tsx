import { FcOk } from "react-icons/fc";
import { FcHighPriority } from "react-icons/fc";
import { FcMediumPriority } from "react-icons/fc";

export enum AlertIcon {
    Safe,
    Warning,
    Danger
}
export interface ProductMarkingProps {
    labelStatus: AlertIcon;
    labelText: string
}

const ProductMarking: React.FC<ProductMarkingProps> = ({labelStatus, labelText}) => {
    let alert;
    switch (labelStatus) {
        case AlertIcon.Safe:
            alert = <FcOk size={20}/>; break;
        case AlertIcon.Warning:
            alert = <FcMediumPriority size={20}/>; break;
        case AlertIcon.Danger:
            alert = <FcHighPriority size={20}/>; break;
    }

    return (
        <div className="flex items-center">
            <div>{alert}</div>
            <div className="pl-2">{labelText}</div>
        </div>
    )
}

export default ProductMarking;