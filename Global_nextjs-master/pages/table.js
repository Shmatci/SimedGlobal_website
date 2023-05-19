import React from 'react'
import homeStyles from '../styles/Home.module.css'

const Table = () => {
  return (
    <div className={homeStyles.cla}>
        <h1 className='table_heading'>Parameters</h1>
    <table className='table'>
      <tr>
        <th>Category</th>
        <th>Test Item</th>
        <th>Specimen Type</th>
        <th>Sample Volume</th>
        <th>Reaction Time</th>
        <th>Compatible devices</th>
        <th>Measuring Range</th>
      </tr>
      <tr>
        <td rowspan = "2">COVID-19</td>
        <td>IgM/IgG</td>
        <td>S/P/WB/C</td>
        <td>5 µl</td>
        <td>15 min</td>
        <td>LS-1100/LS-2100/LS-4000</td>
        <td>IgM: 0.01~10.00mIU/mL<br/>IgG: 0.01~10.00mIU/mL</td>
      </tr>
      <tr>
        <td>Neutralizing antibodies</td>
        <td>S/P/WB/C</td>
        <td>20 µl</td>
        <td>15 min</td>
        <td>LS-1100/LS-2100/LS-4000</td>
        <td>10-3000 BAU/ml</td>
    </tr>
    <tr>
        <td rowspan = "9">Hormone</td>
        <td>TSH</td>
        <td>S</td>
        <td>100 µl</td>
        <td>15 min</td>
        <td>LS-1100/LS-2100/LS-4000</td>
        <td>0.1-60 µlU/mL</td>
      </tr>
      <tr>
        <td>TT3</td>
        <td>S</td>
        <td>100 µl</td>
        <td>15 min</td>
        <td>LS-1100/LS-2100/LS-4000</td>
        <td>0.5-10 nmol/mL</td>
      </tr>
      <tr>
        <td>TT4</td>
        <td>S</td>
        <td>100 µl</td>
        <td>10 min</td>
        <td>LS-1100/LS-2100/LS-4000</td>
        <td>10-350 nmol/mL</td>
      </tr>
      <tr>
        <td>LH</td>
        <td>S</td>
        <td>100 µl</td>
        <td>15 min</td>
        <td>LS-1100/LS-2100/LS-4000</td>
        <td>1.02-200 mlU/mL</td>
      </tr>
      <tr>
        <td>FSH</td>
        <td>S</td>
        <td>100 µl</td>
        <td>15 min</td>
        <td>LS-1100/LS-2100/LS-4000</td>
        <td>1-200 mlU/mL</td>
      </tr>
      <tr>
        <td>PRL</td>
        <td>S</td>
        <td>100 µl</td>
        <td>15 min</td>
        <td>LS-1100/LS-2100/LS-4000</td>
        <td>25-4000 µlU/mL</td>
      </tr>
      <tr>
        <td>Progesterone</td>
        <td>S</td>
        <td>100 µl</td>
        <td>10 min</td>
        <td>LS-1100/LS-2100/LS-4000</td>
        <td>0.8-50 ng/mL</td>
      </tr>
      <tr>
        <td>AMH</td>
        <td>S</td>
        <td>100 µl</td>
        <td>10 min</td>
        <td>LS-1100/LS-2100/LS-4000</td>
        <td>0.046-50 ng/ml</td>
      </tr>
      <tr>
        <td>β-HCG</td>
        <td>S</td>
        <td>100 µl</td>
        <td>15 min</td>
        <td>LS-1100/LS-2100/LS-4000</td>
        <td>2.0-100000mlU/mL</td>
      </tr>
      <tr>
        <td rowspan = "11">Cardiac</td>
        <td>Myo</td>
        <td>S/P</td>
        <td>100 µl</td>
        <td>10 min</td>
        <td>LS-1100/LS-2100/LS-4000</td>
        <td>0.05-40 ng/mL</td>
      </tr>
      <tr>
        <td>cTnl</td>
        <td>S/P</td>
        <td>100 µl</td>
        <td>10 min</td>
        <td>LS-1100/LS-2100/LS-4000</td>
        <td>10-3000 BAU/ml</td>
      </tr>
      <tr>
        <td>CK-MB</td>
        <td>S/P</td>
        <td>100 µl</td>
        <td>10 min</td>
        <td>LS-1100/LS-2100/LS-4000</td>
        <td>2.0-80 ng/mL.</td>
      </tr>
      <tr>
        <td>cTnl/CK-MB/Myo</td>
        <td>S</td>
        <td>100 µl</td>
        <td>10 min</td>
        <td>LS-1100/LS-2100/LS-4000</td>
        <td>cTnl:  0.1ng/mL～40ng/mL<br/>CK-MB: 2ng/mL～80ng/mL<br/>Myo: 20ng/mL～500ng/mL</td>
      </tr>
      <tr>
        <td>D-Dimer</td>
        <td>P</td>
        <td>100 µl</td>
        <td>10 min</td>
        <td>LS-1100/LS-2100/LS-4000</td>
        <td>0.1-10 µ g/mL</td>
      </tr>
      <tr>
        <td>NT-proBNP</td>
        <td>S/P</td>
        <td>100 µl</td>
        <td>15 min</td>
        <td>LS-1100/LS-2100/LS-4000</td>
        <td>50-25000 pg/mL</td>
      </tr>
      <tr>
        <td>BNP</td>
        <td>P</td>
        <td>100 µl</td>
        <td>15 min</td>
        <td>LS-1100/LS-2100/LS-4000</td>
        <td>5-5000 pg/mL</td>
      </tr>
      <tr>
        <td>FDP</td>
        <td>P</td>
        <td>100 µl</td>
        <td>10 min</td>
        <td>LS-1100/LS-2100/LS-4000</td>
        <td>2.5μg/mL-80μg/mL</td>
      </tr>
      <tr>
        <td>HCY</td>
        <td>S</td>
        <td>50 µl</td>
        <td>15 min</td>
        <td>LS-1100/LS-2100/LS-4000</td>
        <td> 1 μmol/L-50.0 μmol/L</td>
      </tr>
      <tr>
        <td>H-FABP</td>
        <td>S</td>
        <td>100 µl</td>
        <td>5 min</td>
        <td>LS-1100/LS-2100/LS-4000</td>
        <td>1-120 ng/mL</td>
      </tr>
      <tr> 
        <td>ST2</td>
        <td>S</td>
        <td>100 µl</td>
        <td>15 min</td>
        <td>LS-1100/LS-2100/LS-4000</td>
        <td>5-200 ng/mL</td>
      </tr>
      <tr>
        <td rowspan = "1">Diabetes Care</td>
        <td>HbA1C</td>
        <td>WB/C</td>
        <td>5 µl</td>
        <td>5 min</td>
        <td>LS-1100/LS-2100/LS-4000</td>
        <td>3% – 14%</td>
      </tr>
      <tr>
        <td rowspan = "6">Diabetes Care</td>
        <td>CRP</td>
        <td>S/P/WB/C</td>
        <td>5 µl</td>
        <td>3 min</td>
        <td>LS-1100/LS-2100/LS-4000</td>
        <td>0.5-200 µg/mL</td>
      </tr>
      <tr>
        <td>SAA</td>
        <td>S/P</td>
        <td>100 µl</td>
        <td>10 min</td>
        <td>LS-1100/LS-2100/LS-4000</td>
        <td>3-200 µg/mL</td>
      </tr>
      <tr>
        <td>SAA/CRP</td>
        <td>S/P/WB/C</td>
        <td>5 µl</td>
        <td>5 min</td>
        <td>LS-1100/LS-2100/LS-4000</td>
        <td>SAA: 2-300 µg/mL<br/>CRP: 0.5-200 µg/mL</td>
      </tr>
      <tr>
        <td>PCT/CRP</td>
        <td>S</td>
        <td>100 µl</td>
        <td>10 min</td>
        <td>LS-1100/LS-2100/LS-4000</td>
        <td>PCT: 0.1-50 ng/mL<br/>CRP: 0.5-200 µg/mL</td>
      </tr>
      <tr>
        <td>lL-6</td>
        <td>S</td>
        <td>100 µl</td>
        <td>15 min</td>
        <td>LS-1100/LS-2100/LS-4000</td>
        <td>5-2000 pg/mL</td>
      </tr>
      <tr>
        <td>PCT</td>
        <td>S</td>
        <td>100 µl</td>
        <td>10 min</td>
        <td>LS-1100/LS-2100/LS-4000</td>
        <td>0.1-50 ng/mL</td>
      </tr>
      <tr>
        <td rowspan = "2">Gastric Function</td>
        <td>G17</td>
        <td>S</td>
        <td>100 µl</td>
        <td>15 min</td>
        <td>LS-1100/LS-2100/LS-4000</td>
        <td>0.1-47.8 pmol/L</td>
      </tr>
      <tr>
        <td>PG I/PG II</td>
        <td>S</td>
        <td>100 µl</td>
        <td>10 min</td>
        <td>LS-1100/LS-2100/LS-4000</td>
        <td>PGI: 10-160 ng/mL<br/>PGII: 6.25-100 ng/mL</td>
      </tr>
      <tr>
        <td rowspan = "1">Tumor Markers</td>
        <td>PSA</td>
        <td>S</td>
        <td>100 µl</td>
        <td>10 min</td>
        <td>LS-1100/LS-2100/LS-4000</td>
        <td>0.1-100 ng/mL</td>
      </tr>
      <tr>
        <td rowspan = "1">Brain Injury</td>
        <td>S100-β</td>
        <td>S</td>
        <td>100 µl</td>
        <td>15 min</td>
        <td>LS-1100/LS-2100/LS-4000</td>
        <td>0.04ng/mL-10ng/mL</td>
      </tr>
      <tr>
        <td rowspan = "2">Immunity</td>
        <td>CCP</td>
        <td>S</td>
        <td>10 µl</td>
        <td>15 min</td>
        <td>LS-1100/LS-2100/LS-4000</td>
        <td>8-500 U/mL</td>
      </tr>
      <tr>
        <td>lgG4</td>
        <td>S</td>
        <td>10 µl</td>
        <td>15 min</td>
        <td>LS-1100/LS-2100/LS-4000</td>
        <td>0.1-3.3 g/L</td>
      </tr>
      <tr>
        <td rowspan = "1">Bone Metabolism</td>
        <td>25-OH-VD</td>
        <td>S/P/WB</td>
        <td>S/P: 5 µl<br/>WB: 10 µl</td>
        <td>10 min</td>
        <td>LS-1100/LS-2100/LS-4000</td>
        <td>5.0-70 ng/mL</td>
      </tr>
      <tr>
        <td rowspan = "1">Anemia</td>
        <td>Ferritin</td>
        <td>S/P/WB/C</td>
        <td>5 µl</td>
        <td>15 min</td>
        <td>LS-1100/LS-2100/LS-4000</td>
        <td>10-1000ng/mL
        </td>
      </tr>
      <tr>
        <td colspan="3">S: Serum | P: Plasma | WB: Whole blood | C: Capillary blood</td>
      </tr>

    </table>
    </div>
  )
}

export default Table