/*
 * This file is part of KubeSphere Console.
 * Copyright (C) 2019 The KubeSphere Console Authors.
 *
 * KubeSphere Console is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * KubeSphere Console is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with KubeSphere Console.  If not, see <https://www.gnu.org/licenses/>.
 */

import React, { Component } from 'react'
import { toJS } from 'mobx'
import { observer } from 'mobx-react'
import { Icon } from '@pitrix/lego-ui'
import { Panel } from 'components/Base'
import { COMPONENT_ICON_MAP } from 'utils/constants'

import ComponentStore from 'stores/component'

import styles from './index.scss'

@observer
export default class ServiceComponents extends Component {
  store = new ComponentStore()

  componentDidMount() {
    const { cluster } = this.props
    this.store.fetchList({ cluster })
  }

  render() {
    const data = toJS(this.store.list.data)
    return (
      <Panel title={t('Service Components')}>
        <div className={styles.icons}>
          {Object.keys(data).map(item => (
            <span key={item} data-tooltip={item}>
              <Icon name={COMPONENT_ICON_MAP[item]} size={44} clickable />
            </span>
          ))}
        </div>
      </Panel>
    )
  }
}