import React from 'react';

export function useWithStyle(props: any, styles: any) {
    if(props.staticContext){
        props.staticContext.css!.push(styles._getCss());
    }
}