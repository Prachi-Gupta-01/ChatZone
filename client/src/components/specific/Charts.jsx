import React from 'react'
import {Line,Doughnut} from "react-chartjs-2"
import {
  CategoryScale, 
  Chart as ChartJS,
  Tooltip,
  Filler,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
    Legend,
    plugins
} from 'chart.js'
import { BorderColor } from '@mui/icons-material'
import { lightPurple, purple,lightBlue } from '../../constants/color'
import { getLast7Days } from '../../lib/features'

const labels = getLast7Days();
ChartJS.register(CategoryScale,
  Tooltip,
  Filler,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
    Legend
)
const lineChartOptions ={
  responsive:true,
  plugins:{
    legend:{
      display:false,
    },
    title:{
      display:false,
    },
  },
  scales:{
    x:{
      grid:{
        display:false,
      }
    },
    y:{
      beginAtZero:true,
      grid:{
        display:false,
      }
    },
  },

}
const LineChart =({value=[]})=>{
  const data={
    labels,
    datasets:[{
      data:value,
      label:"Revenue",
      fill:false,
      backgroundColor:"rgba(75,192,192,0.2)",
      borderColor:"rgba(75, 192, 192,1)"
    },
    {
      data:[1,22,5,6],
      label:"Revenue 2",
      fill:true,
      backgroundColor:lightPurple,
      borderColor:purple
    }
  ],
  };
return <Line data ={data} options={lineChartOptions}/>
}

const doughnutChartOptions={
  responsive:true,
  plugins:{
    legend:{
      display:false,
    },
   
  },
  cutout:120,
};

const DoughnutChart =({value=[],labels=[]})=>{
  const data={
    labels,
    datasets:[{
      data:value,
      label:"Total chats vs groups chats",
      fill:false,
      backgroundColor:[lightPurple,lightBlue],
      borderColor:[purple,lightBlue],
      offset:20,
    },
  ]}
  return <Doughnut style={{zIndex:10}} data={data} options={doughnutChartOptions}/> 
}

export {LineChart,DoughnutChart}
