<template>
  <div class="actions__player">
    <div class="player__button">
      <div class="pointer" :title="(playing) ? 'Pause' : 'Play'" @click.prevent="playing = !playing">
        <div class="round"></div>                 
          <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 20 20"                             
              fill="currentColor"   
              class="icon"              
              >							 
              <path                             
                  v-if="!playing"                
                  d="M15,10.001c0,0.299-0.305,0.514-0.305,0.514l-8.561,5.303C5.51,16.227,5,15.924,5,15.149V4.852c0-0.777,0.51-1.078,1.135-0.67l8.561,5.305C14.695,9.487,15,9.702,15,10.001z"                    
                  />
              <path 
                  v-else             
                  d="M15,3h-2c-0.553,0-1,0.048-1,0.6v12.8c0,0.552,0.447,0.6,1,0.6h2c0.553,0,1-0.048,1-0.6V3.6C16,3.048,15.553,3,15,3z M7,3H5C4.447,3,4,3.048,4,3.6v12.8C4,16.952,4.447,17,5,17h2c0.553,0,1-0.048,1-0.6V3.6C8,3.048,7.553,3,7,3z"                  
                  />                         
          </svg>          
      </div>
        <audio ref="audio" :src="file" style="display: none;" @timeupdate="update" @loadeddata="load" @pause="playing = false"  @play="playing = true"></audio>
    </div> 
    <div id="seek" class="player-rightside">									
		<div class="custom__range">
			<input 
				style="--min: 0; --max: 100; --val: 50;"
				:style="progressStyle"
				type="range"  
				:value="progressSlide"
				@input="moveSlider"
				@click="seek"
				/>
		</div>				
		<div class="player-time">
			<div class="player-time-current">{{ currentSeconds | convertTimeHHMMSS }}</div>
			<div class="player-time-total">{{ durationSeconds | convertTimeHHMMSS }}</div>
		</div>
	</div>
  </div>
</template>

<script>
export default {
filters: {
		convertTimeHHMMSS(val) {
			const hhmmss = new Date(val * 1000).toISOString().substr(11, 8);

			return hhmmss.indexOf("00:") === 0 ? hhmmss.substr(3) : hhmmss;
		}
	},
    props: {		
		file: {
			type: String,
			required: true,
			default: null,			
		},				
	},
	data(){
        return {
        currentSeconds: 0,
		durationSeconds: 0,
		loaded: false,		
		playing: false,			
        }
    },	
	computed: {		
		percentComplete() {
			return parseInt(this.currentSeconds / this.durationSeconds * 100);
		},
		progressStyle() {
			const val = `--val: ${this.percentComplete}`			
			return val
		},	
		progressSlide(){			
			return this.percentComplete
		}	
	},
	
	watch: {
		playing(value) {
			if (value) { return this.$refs.audio.play(); }
			this.$refs.audio.pause();
		},		
	},    
	methods: {		
		load() {
			if (this.$refs.audio.readyState >= 2) {
				this.loaded = true;
				this.durationSeconds = parseInt(this.$refs.audio.duration);                
				return this.playing 
			}

			throw new Error('Failed to load sound file.');
		},		
		seek(e) {
			if (!this.loaded) return;
			const bounds = e.target.getBoundingClientRect();			
			const seekPos = (e.clientX - bounds.left) / bounds.width;
			this.$refs.audio.currentTime = parseInt(this.$refs.audio.duration * seekPos);
			this.$refs.audio.muted = false
		},
		stop() {
			this.playing = this.musicPlay;
			this.$refs.audio.currentTime = 0;
		},
		update(e) {
			this.currentSeconds = parseInt(this.$refs.audio.currentTime);
		},
		moveSlider(e){
			const bounds = e.target.value/100
			this.$refs.audio.muted = true
			this.$refs.audio.currentTime = parseInt(this.$refs.audio.duration * bounds);
			e.target.style.setProperty('--val', +e.target.value);	
		}
	},
	
};
</script>


<style lang="scss" scoped>
@import 'AudioPlayer.scss'

</style>