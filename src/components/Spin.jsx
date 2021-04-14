import { LoadingOutlined } from '@ant-design/icons';
import { Spin as AntSpin } from 'antd';

const spinnerIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const Spin = (props) => <AntSpin indicator={spinnerIcon} {...props} />;

export default Spin;
