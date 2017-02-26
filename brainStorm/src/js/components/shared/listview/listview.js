import React from 'react'
import { ListView,View,Text } from 'react-native'

export default ((props) => {
  const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
  const Row = props.listviewRow
  const dataSource = props.data
  const empty = () => {}

  const renderList = (
    <ListView
        dataSource = {ds.cloneWithRows(dataSource)}
        renderRow={(rowData) => <Row rowData={rowData} navigator={props.navigator} />}
        enableEmptySections={true}
     />
  )
  return (
      renderList
  )
})
