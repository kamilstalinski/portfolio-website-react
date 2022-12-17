import Wave from "react-wavify";

export default function Waves() {
  return (
    <div className='waves-container'>
      <div className='wave' style={{ zIndex: "2" }}>
        <Wave
          fill='#13BD1950'
          options={{
            height: 100,
            amplitude: 80,
            speed: 0.2,
            points: 4,
          }}
        />
      </div>
      <div className='wave' style={{ zIndex: "3" }}>
        <Wave
          fill='#13BD1965'
          options={{
            height: 120,
            amplitude: 60,
            speed: 0.1,
            points: 5,
          }}
        />
      </div>
      <div className='wave' style={{ zIndex: "4" }}>
        <Wave
          fill='#13BD1980'
          options={{
            height: 125,
            amplitude: 70,
            speed: 0.15,
            points: 6,
          }}
        />
      </div>
      <div className='wave' style={{ zIndex: "5" }}>
        <Wave
          fill='#13BD19'
          options={{
            height: 140,
            amplitude: 75,
            speed: 0.2,
            points: 4,
          }}
        />
      </div>
      <div className='wave' style={{ zIndex: "5" }}>
        <Wave
          fill='#00000035'
          options={{
            height: 155,
            amplitude: 50,
            speed: 0.2,
            points: 3,
          }}
        />
      </div>
      <div className='wave' style={{ zIndex: "5" }}>
        <Wave
          fill='#00000070'
          options={{
            height: 170,
            amplitude: 30,
            speed: 0.2,
            points: 5,
          }}
        />
      </div>
      <div className='wave' style={{ zIndex: "5" }}>
        <Wave
          fill='#000000'
          options={{
            height: 195,
            amplitude: 80,
            speed: 0.2,
            points: 7,
          }}
        />
      </div>
    </div>
  );
}
