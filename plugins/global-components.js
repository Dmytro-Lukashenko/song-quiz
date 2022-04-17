import Vue from 'vue'
import ModalStart from '@/components/ModalStart/ModalStart'
import ModalInput from '@/components/ModalStart/UI/ModalInput/ModalInput'
import ModalGame from '@/components/ModalGame/ModalGame'
import ModalSummary from '@/components/ModalSummary/ModalSummary'
import QuizButton from '@/components/UI/QuizButton/QuizButton'
import AudioPlayer from '@/components/UI/AudioPlayer/AudioPlayer'
import HeaderQuiz from '@/components/ModalGame/HeaderQuiz/HeaderQuiz'
import MusicGenre from '@/components/ModalGame/MusicGenre/MusicGenre'
import QuizQuestion from '@/components/ModalGame/QuizQuestion/QuizQuestion'
import SongData from '@/components/ModalGame/SongData/SongData'

Vue.component('ModalStart', ModalStart)
Vue.component('ModalInput', ModalInput)
Vue.component('ModalGame', ModalGame)
Vue.component('ModalSummary', ModalSummary)
Vue.component('QuizButton', QuizButton)
Vue.component('AudioPlayer', AudioPlayer)
Vue.component('HeaderQuiz', HeaderQuiz)
Vue.component('MusicGenre', MusicGenre)
Vue.component('QuizQuestion', QuizQuestion)
Vue.component('SongData', SongData)
