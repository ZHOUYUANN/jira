import React from 'react'
import { useState, useEffect } from 'react'
import { List } from './list'
import { SearchPanel } from './search-panel'
import { cleanObject } from 'utils'
import * as qs from 'qs'

const apiUrl = process.env.REACT_APP_API_URL

export const ProjectListView = () => {
  const [users, setUsers] = useState([])

  const [param, setParam] = useState({
    name: '',
    personId: '',
  })

  const [list, setLists] = useState([])

  useEffect(async () => {
    fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`).then(
      async (res) => {
        if (res.ok) {
          setLists(await res.json())
        }
      }
    )
  }, [param])

  useEffect(async () => {
    fetch(`${apiUrl}/users`).then(async (res) => {
      if (res.ok) {
        setUsers(await res.json())
      }
    })
  }, [])

  return (
    <div>
      <SearchPanel
        users={users}
        param={param}
        setParam={setParam}></SearchPanel>
      <List users={users} list={list}></List>
    </div>
  )
}
