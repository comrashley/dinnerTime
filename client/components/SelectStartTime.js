import React from 'react'
import {connect} from 'react-redux'
import TimePicker from 'react-times'
import timeHelper from './utils/time'
import ICONS from './utils/icons'
import {setStartMinute, setStartHour} from '../store/timeReducer'

class SelectStartTime extends React.Component {
  constructor(props) {
    super(props)
    const {defaultTime, meridiem, focused, showTimezone, timezone} = props
    let hour = ''
    let minute = ''
    if (!defaultTime) {
      ;[hour, minute] = timeHelper.current().split(/:/)
    } else {
      ;[hour, minute] = defaultTime.split(/:/)
    }

    this.state = {
      hour,
      minute,
      meridiem,
      focused,
      timezone,
      showTimezone
    }
    this.onFocusChange = this.onFocusChange.bind(this)
    this.onHourChange = this.onHourChange.bind(this)
    this.onMeridiemChange = this.onMeridiemChange.bind(this)
    this.onMinuteChange = this.onMinuteChange.bind(this)
    this.onTimeChange = this.onTimeChange.bind(this)
    this.handleFocusedChange = this.handleFocusedChange.bind(this)
  }
  componentDidMount() {
    this.props.setStartHour(Number(this.state.hour))
    this.props.setStartMinute(Number(this.state.minute))
  }
  onHourChange(hour) {
    this.setState({hour})
    this.props.setStartHour(Number(hour))
  }

  onMinuteChange(minute) {
    this.setState({minute})
    this.props.setStartMinute(Number(minute))
  }

  onTimeChange(time) {
    const [hour, minute] = time.split(':')
    this.setState({hour, minute})
  }

  onMeridiemChange(meridiem) {
    this.setState({meridiem})
  }

  onFocusChange(focused) {
    this.setState({focused})
  }

  handleFocusedChange() {
    const {focused} = this.state
    this.setState({focused: !focused})
  }
  get basicTrigger() {
    const {hour, minute} = this.state
    return (
      <div onClick={this.handleFocusedChange} className="time_picker_trigger">
        <div>
          Click to open panel<br />
          {hour}:{minute}
        </div>
      </div>
    )
  }

  get customTrigger() {
    return (
      <div onClick={this.handleFocusedChange} className="time_picker_trigger">
        {ICONS.time}
      </div>
    )
  }

  get trigger() {
    const {customTriggerId} = this.props
    const triggers = {
      0: <div />,
      1: this.basicTrigger,
      2: this.customTrigger
    }
    return triggers[customTriggerId]
  }

  render() {
    const {hour, minute, focused, meridiem, timezone, showTimezone} = this.state
    return (
      <div>
        <TimePicker
          {...this.props}
          focused={focused}
          meridiem={meridiem}
          timezone={timezone}
          trigger={this.trigger}
          onFocusChange={this.onFocusChange}
          onHourChange={this.onHourChange}
          onMeridiemChange={this.onMeridiemChange}
          onMinuteChange={this.onMinuteChange}
          onTimeChange={this.onTimeChange}
          showTimezone={showTimezone}
          time={hour && minute ? `${hour}:${minute}` : null}
        />
      </div>
    )
  }
}

const mapDispatch = dispatch => {
  return {
    setStartMinute: minute => {
      dispatch(setStartMinute(minute))
    },
    setStartHour: hour => {
      dispatch(setStartHour(hour))
    }
  }
}

export default connect(null, mapDispatch)(SelectStartTime)
