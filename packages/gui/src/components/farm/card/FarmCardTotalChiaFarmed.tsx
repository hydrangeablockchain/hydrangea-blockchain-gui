import React, { useMemo } from 'react';
import { Trans } from '@lingui/macro';
import { useCurrencyCode } from '@chia/core';
import { useGetFarmedAmountQuery } from '@chia/api-react';
import FarmCard from './FarmCard';
import { mojo_to_chia } from '../../../util/chia';

export default function FarmCardTotalChiaFarmed() {
  const currencyCode = useCurrencyCode();
  const { data, isLoading } = useGetFarmedAmountQuery();

  const farmedAmount = data?.farmedAmount;

  const totalChiaFarmed = useMemo(() => {
    if (farmedAmount !== undefined) {
      const val = BigInt(farmedAmount.toString());
      return mojo_to_chia(val);
    }
  }, [farmedAmount]);

  return (
    <FarmCard
      title={<Trans>{currencyCode} Total Chia Farmed</Trans>}
      value={totalChiaFarmed}
      loading={isLoading}
    />
  );
}