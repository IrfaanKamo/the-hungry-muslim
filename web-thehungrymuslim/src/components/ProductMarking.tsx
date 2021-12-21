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
    let warning: string;
    switch (labelStatus) {
        case AlertIcon.Safe:
            warning = 'S';
            break;
        case AlertIcon.Warning:
            warning = 'W';
            break;
        case AlertIcon.Danger:
            warning = 'D';
            break;
    }

    return (
        <div>
            <span className="pr-4">{warning}</span>
            <span>{labelText}</span>
        </div>
    )
}

export default ProductMarking;