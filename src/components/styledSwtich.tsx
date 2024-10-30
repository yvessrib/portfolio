import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';

export const MaterialUISwitch = styled(Switch)(() => ({
  width: 62,
  height: 33,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(24px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.808716" y="0.5" width="30" height="30" rx="15" fill="${encodeURIComponent(
          '#18181B'
        )}"/><ellipse cx="15.8996" cy="15.2407" rx="9.09091" ry="9.25926" fill="${encodeURIComponent(
          '#D4D5D1'
        )}"/><ellipse cx="18.6269" cy="12.8333" rx="8.18182" ry="8.33333" fill="${encodeURIComponent(
          '#18181B'
        )}"/></svg>')`,
         
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#8b5cf6'
      }
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: '#18181b',
    width: 30,
    height: 30,
    '&::before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.808716" y="0.5" width="30" height="30" rx="15" fill="${encodeURIComponent(
        '#DDD6FE'
      )}"/><path d="M13.6841 5.62457L16.4727 9.02869L19.8945 6.26182L20.1497 10.6549L24.5443 10.4277L22.1685 14.1318L25.8573 16.5311L21.7581 18.1313L23.3322 22.2406L19.0753 21.1257L17.9333 25.3754L15.1447 21.9713L11.7229 24.7382L11.4678 20.3451L7.07315 20.5723L9.44894 16.8682L5.7601 14.4689L9.85933 12.8687L8.28527 8.75941L12.5422 9.8743L13.6841 5.62457Z" fill="${encodeURIComponent(
        '#F6AA05'
      )}"/><path d="M19.5176 15.5C19.5176 17.5484 17.8571 19.209 15.8087 19.209C13.7603 19.209 12.0998 17.5484 12.0998 15.5C12.0998 13.4517 13.7603 11.7911 15.8087 11.7911C17.8571 11.7911 19.5176 13.4517 19.5176 15.5Z" stroke="${encodeURIComponent(
        '#DDD6FE'
      )}"/></svg>')`,
      
    }
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: '#fff',
    borderRadius: 20 / 2
  },
}));