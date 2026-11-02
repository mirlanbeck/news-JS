import { Callback, Endpoint, INewsResponse, ISourcesResponse } from '../../types';
import AppLoader from './appLoader';

class AppController extends AppLoader {
    public getSources(callback: Callback<ISourcesResponse>): void {
        super.getResp<ISourcesResponse>(
            {
                endpoint: Endpoint.Sources,
            },
            callback
        );
    }

    public getNews(e: Event, callback: Callback<INewsResponse>): void {
        let target = e.target as HTMLElement | null;
        const newsContainer = e.currentTarget as HTMLElement;

        while (target && target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (sourceId && newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    newsContainer.querySelector('.source__item--active')?.classList.remove('source__item--active');
                    target.classList.add('source__item--active');
                    super.getResp<INewsResponse>(
                        {
                            endpoint: Endpoint.Everything,
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target.parentElement;
        }
    }
}

export default AppController;
