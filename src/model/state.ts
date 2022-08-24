import { IState } from '../Interfaces/interfaces';

const State: IState = {
  userItem: {
    id: '',
    name: '',
    email: '',
  },
  isAutorise: false,
  userInfoAutorise: {
    message: '',
    token: '',
    refreshToken: '',
    userId: '',
    name: '',
  },
};

export default State;
/*
{
  message: 'Authenticated',
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzM…DEwfQ.xyv_ZiSWrMt78-2bYb4Mv23tnVovVaE1s5-P9AuNbBQ',
  refreshToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzM…YxMH0.fNH5LR_0Pox6QTlsngmt-MfrOoebH7eNgg8KaxUJtd0',
  userId: '63054b928d651600159f91d4',
  name: 'fvgyynu'
    }
    */
