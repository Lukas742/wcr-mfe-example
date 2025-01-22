import { ObjectStatus } from "@ui5/webcomponents-react";
import pkg from "@ui5/webcomponents-react/package.json";
import React from "react";

const MFEName = "MFE3";

const Version = ({ withI18n }: { withI18n?: boolean }) => {
    const [_withI18n, toggleI18n] = React.useReducer((prev) => !prev, withI18n);

    return (
        <>
            <button onClick={toggleI18n}>Toggle I18n component</button>
            {_withI18n ? (
                <ObjectStatus>
                    {MFEName}: {pkg.version}
                </ObjectStatus>
            ) : (
                <span>
          {MFEName}: {pkg.version}
        </span>
            )}
        </>
    );
};
export default Version;
