import {motion, AnimatePresence } from 'framer-motion'
import { useContext } from 'react' 
import FeedbackItem from './FeedbackItem'
import Spinner from './shared/Spinner'
import FeedbackContext from '../context/FeedbackContext'
import Card from './shared/Card'

function FeedbackList() {
  const {feedback, isLoading} = useContext(FeedbackContext)

    if(!isLoading && (!feedback || feedback.length === 0) ) {
        return <Card><p style={{ color: 'red', fontWeight: '600'}}>No Feedback Yet!</p></Card>
    }

    return isLoading ? <Spinner /> : (
        <div className='feedback-list'>
          <AnimatePresence>
            {feedback.map((item) => (
              <motion.div 
                key={item.id}
                initial={{ transform: 'translateY(-10rem)', opacity: 0 }}
                animate={{ opacity: 1, transform: 'translateY(0)' }}
                exit={{ opacity: 0, transform: 'translateY(-10rem)' }}
              >
                <FeedbackItem 
                  key={item.id} 
                  item={item} 
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
    )

  // return (
  //   <div className='feedback-list'>
  //     {feedback.map((item) => (
  //       <FeedbackItem 
  //         key={item.id} 
  //         item={item} 
  //         handleDelete={handleDelete} 
  //       />
  //     ))}
  //   </div>
  // )
}

export default FeedbackList
