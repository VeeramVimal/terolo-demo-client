import React from 'react'
import { Skeleton } from 'antd';

export default function Skeletonloader(props) {
  return (
    
        <Skeleton active={true} paragraph={{rows:props.rows?props.rows:3}}/>
    
  )
}
