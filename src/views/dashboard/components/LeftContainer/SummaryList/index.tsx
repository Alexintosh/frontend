import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { variables } from '../../../../../config';
import colors from '../../../../../config/colors';
import { getPoolsSummaryObject } from '../../../../../utils/math';
import SummaryItem from '../SummaryItem';

const Wrapper = styled.div`
    padding-left: 0;
    margin-bottom: 65px;
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    font-weight: ${variables.FONT_WEIGHT.MEDIUM};
    color: ${colors.FONT_LIGHT};
    /* use the same side padding as in <OverviewItem> so that the items are aligned */
    padding: 10px;
`;

const HeaderChild = styled.div`
    display: flex;
    flex: 0 0 33%;
    justify-content: center;
`;

const Exchange = styled(HeaderChild)``;

const Value = styled(HeaderChild)``;

const Gains = styled(HeaderChild)``;

const ItemsWrapper = styled.div``;

const SummaryList = () => {
    const allPools = useSelector(state => state.allPools);
    const activePoolIds = useSelector(state => state.activePoolIds);
    const poolsSummaryInfo: any = getPoolsSummaryObject(allPools, activePoolIds);

    if (activePoolIds.length <= 0) {
        return null;
    }

    return (
        <Wrapper>
            <Header>
                <Exchange>&ensp;</Exchange>
                <Value>Value</Value>
                <Gains>Rewards</Gains>
            </Header>
            <ItemsWrapper>
                <SummaryItem
                    headline="Active Pools Summary"
                    value={poolsSummaryInfo.endBalanceUsd}
                    gainsAbsolute={poolsSummaryInfo.feesUsd}
                    roi={5}
                />
            </ItemsWrapper>
        </Wrapper>
    );
};

export default SummaryList;
