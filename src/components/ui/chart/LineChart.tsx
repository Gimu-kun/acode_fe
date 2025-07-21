import { useEffect, useRef } from 'react';
import Chart, { Colors, plugins } from 'chart.js/auto';
import { getRelativePosition } from 'chart.js/helpers';

export default function LineChart() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    const data = {
      labels: ['Chương 1', 'Chương 2', 'Chương 3', 'Chương 4', 'Chương 5', 'Chương 6'],
      datasets: [
        {
          data: [65, 59, 80, 81, 56, 55],
          fill: true,
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
            'rgba(255, 159, 64, 0.5)',
          ],
          borderColor: 'rgb(75, 192, 192)',
          tension: 1,
        },
      ],
    };

    chartRef.current = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: {
        onClick: (e) => {
          const canvasPosition = getRelativePosition(e, chartRef.current!);

          const x = chartRef.current!.scales.x.getValueForPixel(canvasPosition.x);
          const y = chartRef.current!.scales.y.getValueForPixel(canvasPosition.y);

          console.log('Clicked data position:', { x, y });
        },
        plugins:{
            legend:{
                display:false
            }
        },
        scales:{
            y:{
                min:0,
                max:100,
                ticks:{
                    stepSize:10
                }
            }
        }
      },
    });

    return () => {
      chartRef.current?.destroy();
    };
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}
