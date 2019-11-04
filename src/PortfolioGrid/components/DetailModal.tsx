import React, { PureComponent } from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react';

interface Props {
    itemNode: {},
    detail: {
        job: string,
        company: string,
        image: string,
        description: string,
        detailBullet?: string[],
        href?: string,
    },
}

export class DetailModal extends PureComponent<Props, {}> {
    render() {
        const { itemNode, detail } = this.props;
       return <Modal trigger={<button className="detail-modal">{itemNode}</button>}>
        <Modal.Header>{detail.job}</Modal.Header>
        <Modal.Content image>
        <Image wrapped size='medium' src={detail.image} />
        <Modal.Description>
           {detail.href && <a href={detail.href}>
                <Header>{detail.company}</Header>
            </a>
           }
           {!detail.href && <a href={detail.href}>
                <Header>{detail.company}</Header>
            </a>
           }
            <p>{detail.description}</p>
            {detail.detailBullet && <ul>
                {
                    detail.detailBullet.map((bullet, index):any => {
                        return <li key={`bullet-${index}`}>
                                {bullet}
                            </li>
                    })
                }
            </ul>}
        </Modal.Description>
        </Modal.Content>
    </Modal>
    }
 }

