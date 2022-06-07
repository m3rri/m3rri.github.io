import { ResponsiveLine, Serie, Datum } from '@nivo/line'

const skillList:String[] = ["Java", "Spring", "Oracle", "Javascript", "React", "Nextjs", "SpringBoot", "AWS"];
const skillData = [
  {"year":"2017", data: [skillList[0], skillList[2], skillList[1]]},
  {"year":"2018", data: [skillList[1], skillList[2], skillList[3], skillList[0]]},
  {"year":"2019", data: [skillList[2], skillList[3], skillList[1], skillList[0]]},
  {"year":"2020", data: [skillList[3], skillList[1], skillList[2], skillList[0]]},
  {"year":"2021", data: [skillList[6], skillList[4], skillList[3], skillList[1], skillList[2], skillList[0]]},
  {"year":"2022", data: [skillList[6], skillList[7], skillList[0], skillList[1], skillList[5], skillList[4], skillList[3]]}
];

const getChartData = (list:String[], skillData: {}[])=>{
  return list.map(skill=>{
    const _data = skillData.map(({year, data}:any)=>{
      const idx = data.indexOf(skill);
      if(idx>=0){
        return {"x": year, "y": data.length-idx};
      }
    },[]).filter(data=>{
      return data;
    });

    return {"id": skill, "data": _data};
  });
}

const MyResponsiveLine = () => {
  const chartData = getChartData(skillList, skillData) as Serie[];

  return <ResponsiveLine
        data={chartData}
        margin={{ top: 25, right: 110, bottom: 50, left: 40 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            reverse: false
        }}
        yFormat=" >-.2f"
        axisLeft={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 5,
          tickRotation: 0,
          legend: '👆effort - year👉',
          legendOffset: 40,
          legendPosition: 'start'
      }}
        pointSize={10}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        isInteractive={false}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                  ]
            }
        ]}
    />
}

export default MyResponsiveLine;