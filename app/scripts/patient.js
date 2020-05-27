import '../styles/patient.sass'

import 'bootstrap/dist/js/bootstrap.bundle'
import './utils/home'
import './utils/benefitTab'
import './utils/footer'

if (process.env.NODE_ENV !== 'production') {
  require('../patient.pug')
}
