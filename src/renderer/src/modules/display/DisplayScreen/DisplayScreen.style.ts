import { SystemStyleObject } from '@chakra-ui/react'

const styles: { [key: string]: SystemStyleObject } = {
  container: {
    flex: 1,
    height: '100%',
    flexDirection: 'rew'
  },

  left: { flex: 1, maxWidth: '60%', backgroundColor: 'red' },

  right: { flex: 1, maxWidth: '40%', backgroundColor: 'blue' }
}

export { styles }
