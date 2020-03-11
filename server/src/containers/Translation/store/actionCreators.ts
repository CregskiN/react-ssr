import { Dispatch } from 'redux';
import { AxiosInstance } from 'axios';
import { TranslationsListItem, ResponseResult, ChangeTranslationsAction } from '../../../types';


const changeTranslationsListAction: (translationsList: TranslationsListItem[]) => ChangeTranslationsAction = (translationsList) => {
    return {
        type: 'get_translations_list',
        payload: {
            translationsList
        }
    }
}


export const getTranslationsList = () => {
    return (dispatch: Dispatch, getState: any, axiosInstance: AxiosInstance) => {
        return axiosInstance.get('/api/translations.json')
            .then(res => {
                const responseResult: ResponseResult = res.data;
                if (responseResult.success) {
                    dispatch(changeTranslationsListAction(responseResult.data));
                } else {
                    alert('请先登录')
                    dispatch(changeTranslationsListAction([]));
                }
            }).catch(err => {
                console.log(err);
            })
    }
}