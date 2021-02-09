import React from 'react';
import { observer } from 'mobx-react';

import {
    u_infinite_scroll,
    c_infinite_scroll,
} from 'content_script/internal';

export const Spinner = observer(() => (
    <div
        id='spinner'
        className={u_infinite_scroll.Spinner.i().visibility_cls}
    >
        {
            Array(8).fill(undefined).map((item, i) => (
                <c_infinite_scroll.SpinnerItem
                    key={i}
                    i={i}
                />
            ))
        }
    </div>
));