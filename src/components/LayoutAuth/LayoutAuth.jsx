import { Alert, Col, Row } from 'antd';
import PropTypes from 'prop-types';

import Styled from './LayoutAuth.style';

const LayoutAuth = ({ title, feedback, children }) => (
  <Styled.Content>
    <Row align="middle">
      <Col xs={18} md={10}>
        <Row align="middle" justify="center">
          <Styled.Box>
            <Styled.Title>{title}</Styled.Title>

            {feedback && (
              <Alert {...feedback} showIcon style={{ marginBottom: 24 }} />
            )}

            {children}
          </Styled.Box>
        </Row>
      </Col>

      <Styled.ColBackground xs={4} md={14} />
    </Row>
  </Styled.Content>
);

LayoutAuth.propTypes = {
  title: PropTypes.string,
  feedback: PropTypes.string,
  children: PropTypes.element.isRequired,
};

LayoutAuth.defaultProps = {
  title: 'Login',
  feedback: null,
};

export default LayoutAuth;
