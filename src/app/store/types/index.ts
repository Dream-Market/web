import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
import { store } from '..';

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>;
