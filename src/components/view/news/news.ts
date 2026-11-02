import './news.css';
import { IArticle } from '../../../types';
import { getElement } from '../../../utils/dom';

class News {
    public draw(data: IArticle[]): void {
        const news: IArticle[] = data.length >= 10 ? data.filter((_item: IArticle, idx: number) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = getElement<HTMLTemplateElement>(document, '#newsItemTemp');

        news.forEach((item: IArticle, idx: number) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as DocumentFragment;

            if (idx % 2) getElement<HTMLElement>(newsClone, '.news__item').classList.add('alt');

            getElement<HTMLElement>(newsClone, '.news__meta-photo').style.backgroundImage = `url(${
                item.urlToImage || 'img/news_placeholder.jpg'
            })`;
            getElement<HTMLElement>(newsClone, '.news__meta-author').textContent = item.author || item.source.name;
            getElement<HTMLElement>(newsClone, '.news__meta-date').textContent = item.publishedAt
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('-');

            getElement<HTMLElement>(newsClone, '.news__description-title').textContent = item.title;
            getElement<HTMLElement>(newsClone, '.news__description-source').textContent = item.source.name;
            getElement<HTMLElement>(newsClone, '.news__description-content').textContent = item.description;
            getElement<HTMLAnchorElement>(newsClone, '.news__read-more a').setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        const newsContainer = getElement<HTMLElement>(document, '.news');
        newsContainer.innerHTML = '';
        newsContainer.appendChild(fragment);
    }
}

export default News;
