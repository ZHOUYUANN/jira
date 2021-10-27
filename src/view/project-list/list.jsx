import React from 'react'

export const List = ({ list, users }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {list.map((pro) => (
          <tr key={pro.id}>
            <th>{pro.name}</th>
            <th>{users.find(user => user.id === pro.personId)?.name || '未知'}</th>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
