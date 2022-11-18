import { useDispatch, useSelector } from 'react-redux';
import Head from '../src/components/Head';
import { RootState } from '../src/store';
import { light, dark } from '../src/store/temaStore';
import { Content, Template } from '../src/components/Template';
import RowColumn from '../src/components/RowColumn';
import ImgProfissional from '../src/components/ImgProfissional';

export default function Home() {
    const theme = useSelector((state: RootState) => state.tema);
    const dispatch = useDispatch();
    const handleClick = () => {
        if (theme.selected === 'dark') { dispatch(light()); } else { dispatch(dark()); }
    };
    return (
        <Template>
            <Head />
            <Content style={{
                backgroundColor: `${theme.colors.bgColor}`,
                color: `${theme.colors.text}`,
            }}
            >
                <div className="flex width-full justify-center">
                    <button
                        type="button"
                        onClick={handleClick}
                    >
                        botao

                    </button>
                </div>
                <RowColumn style={{ marginLeft: '5%' }}>
                    <div style={{
                        display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '40%',
                    }}
                    >
                        <ImgProfissional src="https://media-exp1.licdn.com/dms/image/C4D03AQF55j9TS-OThA/profile-displayphoto-shrink_200_200/0/1626331516428?e=1671062400&v=beta&t=XUoisIfpif6XH-mL5mclDrfGdwInOCNivpXrPCQP5Wg" />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <h1><strong>Guilherme Silva</strong></h1>
                        <a target="_blank" href="https://www.linkedin.com/in/guihdiias/" rel="noreferrer">@Guihdiias</a>
                        <a target="_blank" href="https://github.com/Guihdiias" rel="noreferrer">@Guihdiias</a>
                    </div>
                </RowColumn>
            </Content>
        </Template>
    );
}
