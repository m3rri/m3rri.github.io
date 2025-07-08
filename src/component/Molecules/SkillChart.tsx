import { ResponsiveLine, Serie } from "@nivo/line";

const skillMap: { [k: string]: String } = {
    java: "Java",
    spring: "Spring(mvc)",
    oracle: "Oracle",
    js: "Javascript",
    react: "React",
    next: "Nextjs",
    boot: "SpringBoot",
    aws: "AWS",
    azure: "Azure",
    mongo: "mongoDB",
    springWebFlux: "Spring(web flux)",
};
const skillData = [
    //{ year: "2017", data: [skillMap.java, skillMap.oracle, skillMap.spring] },
    //{ year: "2018", data: [skillMap.spring, skillMap.oracle, skillMap.js, skillMap.java] },
    //{ year: "2019", data: [skillMap.oracle, skillMap.js, skillMap.spring, skillMap.java] },
    { year: "2020", data: [skillMap.js, skillMap.spring, skillMap.oracle, skillMap.java] },
    {
        year: "2021",
        data: [skillMap.boot, skillMap.react, skillMap.js, skillMap.spring, skillMap.oracle, skillMap.java],
    },
    {
        year: "2022",
        data: [skillMap.boot, skillMap.aws, skillMap.java, skillMap.spring, skillMap.next, skillMap.react, skillMap.js],
    },
    {
        year: "2023",
        data: [skillMap.boot, skillMap.java, skillMap.aws, skillMap.springWebFlux, skillMap.spring, skillMap.mongo],
    },
    {
        year: "2024",
        data: [skillMap.boot, skillMap.java, skillMap.aws, skillMap.springWebFlux, skillMap.mongo],
    },
    {
        year: "2025",
        data: [skillMap.boot, skillMap.java, skillMap.azure],
    },
];

const getChartData = (skillMap: { [k: string]: String }, skillData: {}[]) => {
    return Object.keys(skillMap).map((skill) => {
        const _data = skillData
            .map(({ year, data }: any) => {
                const idx = data.indexOf(skillMap[skill]);
                if (idx >= 0) {
                    return { x: year, y: data.length - idx };
                }
            }, [])
            .filter((data) => {
                return data;
            });

        return { id: skillMap[skill], data: _data };
    });
};

const MyResponsiveLine = () => {
    const chartData = getChartData(skillMap, skillData) as Serie[];

    return (
        <ResponsiveLine
            data={chartData}
            margin={{ top: 25, right: 125, bottom: 50, left: 40 }}
            xScale={{ type: "point" }}
            yScale={{
                type: "linear",
                min: "auto",
                max: "auto",
                reverse: false,
            }}
            yFormat=" >-.2f"
            axisLeft={null}
            axisBottom={{
                tickSize: 0,
                tickPadding: 5,
                tickRotation: 0,
                legend: "👆effort - year👉",
                legendOffset: 40,
                legendPosition: "start",
            }}
            pointSize={10}
            pointBorderWidth={2}
            pointBorderColor={{ from: "serieColor" }}
            pointLabelYOffset={-12}
            isInteractive={false}
            useMesh={true}
            legends={[
                {
                    anchor: "bottom-right",
                    direction: "column",
                    justify: false,
                    translateX: 100,
                    translateY: 0,
                    itemsSpacing: 0,
                    itemDirection: "left-to-right",
                    itemWidth: 80,
                    itemHeight: 20,
                    itemOpacity: 0.75,
                    symbolSize: 12,
                    symbolShape: "circle",
                    symbolBorderColor: "rgba(0, 0, 0, .5)",
                    effects: [
                        {
                            on: "hover",
                            style: {
                                itemBackground: "rgba(0, 0, 0, .03)",
                                itemOpacity: 1,
                            },
                        },
                    ],
                    toggleSerie: true,
                },
            ]}
        />
    );
};

export default MyResponsiveLine;
