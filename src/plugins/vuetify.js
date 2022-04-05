import '@fortawesome/fontawesome-free/css/all.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'md' || 'fa' || 'md'
    },
    theme: {
        themes: {
            primary:    '#ee44aa',
            secundary:  '#424242',
            accent:     '#82B1FF',
            error:      '#FF5252',
            info:       '#2196F3',
            success:    '#4CAF50',
            warning:    '#FFC107', 
            light: {
                primary: '#7C92FE'
            }
        }
    }
});
