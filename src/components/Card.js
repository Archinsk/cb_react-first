import './Card.css';
import FieldProperty from './FieldProperty';

export default function Card({ cardData }) {
    const properties = cardData.map(cardDataItem => <FieldProperty title={cardDataItem.title} value={cardDataItem.value} />)
    return (
        <div class="col-4">
            <div className="card-field h-100">
                <div class="row">
                    <div class="col-12">{properties[0]}</div>
                </div>
                <div class="row">
                    <div class="col-4">{properties[1]}</div>
                    <div class="col-4">{properties[2]}</div>
                    <div class="col-4">{properties[3]}</div>
                </div>
                <div class="row">
                    <div class="col-4">{properties[4]}</div>
                    <div class="col-4">{properties[5]}</div>
                    <div class="col-4">{properties[6]}</div>
                </div>
                <div class="row">
                    <div class="col-4">{properties[7]}</div>
                    <div class="col-4">{properties[8]}</div>
                    <div class="col-4">{properties[9]}</div>
                </div>
            </div>
        </div>
    )
}