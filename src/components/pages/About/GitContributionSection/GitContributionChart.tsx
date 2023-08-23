import React from 'react';
import { GitContributionType } from '../../../../types';

interface Props {
  data: GitContributionType;
}

const cellStyle = 'border-2 border-theme1 rounded-md	';

function determineColorType(count: number) {
  if (count === 0) {
    return 'bg-[#2f3642]';
  } else if (count <= 3) {
    return 'bg-[#c6e48b]';
  } else if (count <= 6) {
    return 'bg-[#7bc96f]';
  }
  return 'bg-[#239a3b]';
}

function getRow(contrib: GitContributionType['contributions'], key: string) {
  const c = contrib[key as keyof GitContributionType['contributions']];
  return c.map(({ count, date }) => {
    return <td width="15px" className={`${determineColorType(count)} ${cellStyle}`} key={date}></td>;
  });
}

export default function GitContributionChart({ data }: Props) {

  const tableRows = Object.keys(data.contributions).map((key: string) => {
    return (
      <tr className="h-[15px]" key={key}>
        <td className="text-[1vh]" key={key}>
          {key}
        </td>
        {getRow(data.contributions, key)}
      </tr>
    );
  });

  return (
    <div className="pl-1">
      <div>{`${data.contribCount} contributions from ${data.startingDate} to ${data.endingDate}`}</div>
      <table className="w-fit h-fit">
        <thead></thead>
        <tbody>{tableRows}</tbody>
      </table>
    </div>
  );
}
