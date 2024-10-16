import { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function Graph() {
  const data = {
    labels: ['Liquidity Pool', 'Marketing', 'Team'],
    datasets: [
      {
        label: 'Allocation',
        data: [35, 10, 55], 
        backgroundColor: [
          'rgba(34, 211, 238, 1)',
          'rgba(0, 150, 199, 1)', 
          'rgba(0, 110, 150, 1)',
        ],
        borderColor: [
          'rgba(0, 0, 0, 1)', 
        ],
        borderWidth: 8, 
        borderRadius: 17,
        cutout: '67%',
      },
    ],
  };
  
  const options = {
    plugins: {
      legend: {
        display: false,
        position: 'bottom',
        labels: {
          boxWidth: 12,
          padding: 15,
          font: {
            size: 14,
          },
        },
      },
    },
    maintainAspectRatio: false,
    responsive: true,
  };

  return (
    <div className='relative bg-black  overflow-hidden'>
      <video
        className='absolute top-0 left-0 w-full h-full object-cover'
        autoPlay
        loop
        muted
      >
        <source src='https://res.cloudinary.com/dfh97e9e4/video/upload/v1729077051/-b73b-41ed-85be-06b5992f5f11_1_zilmiu.mov' type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      
      <div className='relative z-10'>
        <h1 className='text-center text-white font-bold text-4xl pt-10'>Tokenomics</h1>
        <div className='flex flex-col md:flex-row pt-14 justify-around items-start md:items-center'>
          <div className='flex justify-center items-center w-full md:w-[500px] h-[450px] rounded-md'>
            <Doughnut data={data} options={options} />
          </div>
          <div className='flex flex-col gap-y-6 w-full md:w-[440px]'>
            {/* Token Info */}
            <div className='bg-gray-900 px-6 py-7 rounded-md text-white'>
              <div className='flex flex-col'>
                <div className='flex justify-between'>
                  <h1>Name</h1> <span>: EthAi</span>
                </div>
                <div className='flex justify-between'>
                  <h1>Token Name</h1> <span>: $EthAi</span>
                </div>
                <div className='flex justify-between'>
                  <h1>Token Standard</h1> <span>: ERC20</span>
                </div>
                <div className='flex justify-between'>
                  <h1>Blockchain</h1> <span>: Ethereum</span>
                </div>
                <div className='flex justify-between'>
                  <h1>Total Supply</h1> <span>: 100 Million</span>
                </div>
                <div className='flex justify-between'>
                  <h1>Tax</h1> <span>: 5%</span>
                </div>
              </div>
            </div>
            {/* Duplicate Token Info Box */}
            <div className='bg-gray-900 px-6 py-7 rounded-md text-white'>
              <div className='flex flex-col'>
                <div className='flex justify-between'>
                  <h1>Name</h1> <span>: EthAi</span>
                </div>
                <div className='flex justify-between'>
                  <h1>Token Name</h1> <span>: $EthAi</span>
                </div>
                <div className='flex justify-between'>
                  <h1>Token Standard</h1> <span>: ERC20</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Graph;
