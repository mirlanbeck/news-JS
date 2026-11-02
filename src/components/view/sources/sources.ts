import './sources.css';
import { ISource } from '../../../types';
import { getElement } from '../../../utils/dom';

class Sources {
    public draw(data: ISource[]): void {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = getElement<HTMLTemplateElement>(document, '#sourceItemTemp');

        data.forEach((item: ISource) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as DocumentFragment;

            getElement<HTMLElement>(sourceClone, '.source__item-name').textContent = item.name;
            getElement<HTMLElement>(sourceClone, '.source__item').setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        getElement<HTMLElement>(document, '.sources').append(fragment);
    }
}

export default Sources;
