import React from 'react';
import { observer } from 'mobx-react';

import { svg } from 'shared/svg';

import { d_icons, p_icons } from 'content_script/internal';

export const Icon: React.FunctionComponent<p_icons.Icon> = observer((props) => {
    const { type, i } = props;

    const url: string = d_icons.Main.i().get_url({
        i,
        type,
    });
    const src: string = d_icons.Main.i()[type][url];
    const show_icon: boolean = d_icons.Main.i().get_show_icon_bool({
        type,
        url,
    });

    // eslint-disable-next-line no-unused-expressions
    d_icons.Main.i().favicons[url];
    // eslint-disable-next-line no-unused-expressions
    d_icons.Main.i().server_locations[url];

    return d_icons.Main.i().show_icon_w({ type }) ? (
        <span className={x.cls(['icon_w', type])}>
            {src === 'placeholder' ? undefined : (
                <img
                    className={x.cls([
                        'icon',
                        type,
                        d_icons.Main.i().icon_visibility_cls({ show_icon }),
                    ])}
                    alt=''
                    title={d_icons.Main.i().server_data({
                        type,
                        url,
                    })}
                    src={src}
                />
            )}
            {d_icons.Main.i().show_placeholder({
                type,
                show_icon,
            }) ? (
                <svg.Yard />
            ) : undefined}
        </span>
    ) : (
        <></>
    );
});
