import React, { FunctionComponent } from "react";
import styles from "components/card/Card.module.scss";
import { ICharacterResult } from "interfaces/Character";

interface Props {
  results: Array<ICharacterResult> | undefined;
}

const Card: FunctionComponent<Props> = (props) => {
  let display: any;
  console.log(props.results);

  if (props.results) {
    // Sonuç varsa
    display = props.results.map((result: ICharacterResult) => {
      return (
        <div key={result.id} className="col-4 position-relative mb-4">
          <div className={`${styles.cards} mt-4`}>
            <img src={result.image} alt="" className={`${styles.img} img-fluid`} />
            <div style={{ padding: "10px" }} className="content">
              <div className=" fs-4 fw-bold mb-4">{result.name}</div>
              <div>
                <div className="fs-6">Son Lokasyon:</div>
                <div className="fs-5">{result.location.name}</div>
              </div>
            </div>
          </div>
          {(() => {
            //IIFE
            if (result.status === "Dead") {
              return <div className={`${styles.badge} position-absolute badge bg-danger`}>Ölü</div>;
            } else if (result.status === "Alive") {
              return <div className={`${styles.badge} position-absolute badge bg-success`}>Canlı</div>;
            } else {
              return <div className={`${styles.badge} position-absolute badge bg-secondary`}>Bilinmiyor</div>;
            }
          })()}
        </div>
      );
    });
  } else {
    display = "Karakter bulunamadı.";
  }

  return <>{display}</>;
};

export default Card;
