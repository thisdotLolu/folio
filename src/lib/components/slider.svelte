<script>
    import { carouselData } from "$lib/dumpData";
  </script>
  <div class='slider bg-black'>
      <div class='slide-track'>
          {#each carouselData as dump, index}
          <div class='slide'>
              <img 
              class=''
              alt='dump'
              src={dump}/>
          </div>
          {/each}
      </div>
  </div>
  <style>
      .slider {
          height: 100%;
          margin: auto;
          position: relative;
          width: 100%;
          display: grid;
          place-items: center;
          overflow: hidden;
          margin-top: 50px;
          background-color: black;
      }

      .slide-track:hover {
  animation-play-state: paused;
}
  
      .slide-track {
          display: flex;
          animation: scroll 300s linear infinite;
          gap: 20px;
      }
  
      @keyframes scroll {
          0% {
              transform: translateX(0)
          }
          100% {
              transform: translateX(-1200%);
          }
      }
  
      .slide {
          display: flex;
          align-items: center;
          flex-shrink: 0;
          max-height: 500px;
      }
  
      img {
          max-height: 500px;
          width: auto;
          height: auto;
          object-fit: contain;
          display: block;
          border-radius: 10px;
      }
  
      @media screen and (max-width: 770px) {
          .slider {
              margin-top: -23px;
              height: 540px;
          }
          
          .slide {
              max-height: 300px;
          }
          
          img {
              max-height: 300px;
              width: auto;
              height: auto;
              border-radius: 10px;
          }

            @keyframes scroll {
          0% {
              transform: translateX(0)
          }
          100% {
              transform: translateX(-2000%);
          }

      }
       .slide-track {
          display: flex;
      }
      }
  </style>