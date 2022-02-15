import React from "react";
import {
  BarChart,
  Bar,
  ReferenceLine,
  XAxis,
  Label,
  Tooltip,
  Legend,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import { CartState } from "../componentes/context/Context";
const Grafico = () => {
  const {
    state: { resultado },
  } = CartState();

  let data = [];

  for (const key in resultado.graficoValores?.comAporte) {
    data = [
      ...data,
      {
        name: key,
        comAporte: resultado.graficoValores?.comAporte[key],
        semAporte: resultado.graficoValores?.semAporte[key],
      },
    ];
  }
  console.log(data);

  return (
    <>
      <ResponsiveContainer width="100%" height="95%">
        
        <BarChart
          width={500}
          height={1300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name">
            <Label value="Tempo (meses)" offset={0} position="insideBottom" />
          </XAxis>
          <YAxis tickLine={false} axisLine={false} tick={false}>
            <Label value="Valor R$" angle={-90} position="insideLeft" />
          </YAxis>
          <Tooltip />
          <Legend verticalAlign="bottom" wrapperStyle={{ lineHeight: "40px" }} />
          <ReferenceLine y={0} stroke="#000" />
          {/* <Brush dataKey="name" height={30} stroke="#8884d8" /> */}

          <Bar dataKey="semAporte" maxBarSize={400} stackId={1} fill="black" />
          <Bar
            dataKey="comAporte"
            maxBarSize={400}
            stackId={1}
            fill="#ED8E53"
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default Grafico;
