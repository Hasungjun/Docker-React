import React, { Component } from 'react';
import { Modal, Button, Input } from 'antd';
import { Row, Col, Slider, Card } from 'antd';
import "./Option4modal.css"
const { TextArea } = Input;
const ButtonGroup = Button.Group;
class Option4modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      id: this.props.record.id,
      textArea: '',
      content: this.props.record.content,
      title: this.props.record.title,
      status: this.props.record.status
    }
    console.log(this.props.record)
  }

  showModal = (e) => {
    this.setState({
      visible: true,

    });
  }

  handleOk = (e) => {
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    this.setState({
      visible: false,
    });

  }

  onChange = (e) => {
    this.setState({
      textArea: e.target.value
    })
  }

  disabled = () => {
    if (this.state.status == 'PROGRESS') {
      return true;
    }
    return false;
  }

  render() {


    return (
      <div>
        <Button style={{borderColor:"#029EA6",color:"#029EA6"}} onClick={this.showModal}>
          {this.props.title}
        </Button>
        <Modal
          title='보고서 보기'
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
          width={1100}
        >
          <Card
            title={this.state.title}
          >
            <Row type="flex" justify="center">
              <div dangerouslySetInnerHTML={{ __html: this.state.content }}></div>
            </Row>
          </Card>
          <p></p>
          <Card className="no"
            title='반려사유'
          >
          <TextArea rows={4} onChange={this.onChange} placeholder="반려 시 필수 입력" />
          </Card>
          <p></p>

          <Row type="flex" justify="end">
            <Col span={4} >

                <Button style={{marginRight:"5px"}} type="primary" ghost disabled={this.disabled()} size='large' onClick={id => this.props.progress(this.state.id, 'PROGRESS', this.state.textArea)}>
                  승인
                </Button>
                <Button style={{marginRight:"5px"}} type="danger" ghost size='large' onClick={id => this.props.progress(this.state.id, 'HOLD', this.state.textArea)}>
                  반려
                </Button>

            </Col>
          </Row>

        </Modal>
      </div>
    );
  }
}


export default Option4modal;