import BigNumber from 'bignumber.js'
import erc20ABI from 'config/abi/erc20.json'
// import masterchefABI from 'config/abi/masterchef.json'
import wkdLpPoolABI from 'config/abi/wkdLpPool.json'
import multicall from 'utils/multicall'
// import { getAddress, getMasterChefAddress } from 'utils/addressHelpers'
import { getAddress, getWkdPoolAddress } from 'utils/addressHelpers'
import { SerializedFarmConfig } from 'config/constants/types'

export const fetchFarmUserAllowances = async (account: string, farmsToFetch: SerializedFarmConfig[]) => {
  const wkdLpPoolAddress = getWkdPoolAddress()

  const calls = farmsToFetch.map((farm) => {
    const lpContractAddress = getAddress(farm.lpAddresses)
    return { address: lpContractAddress, name: 'allowance', params: [account, wkdLpPoolAddress] }
  })

  const rawLpAllowances = await multicall<BigNumber[]>(erc20ABI, calls)
  const parsedLpAllowances = rawLpAllowances.map((lpBalance) => {
    return new BigNumber(lpBalance).toJSON()
  })
  return parsedLpAllowances
}

export const fetchFarmUserTokenBalances = async (account: string, farmsToFetch: SerializedFarmConfig[]) => {
  const calls = farmsToFetch.map((farm) => {
    const lpContractAddress = getAddress(farm.lpAddresses)
    return {
      address: lpContractAddress,
      name: 'balanceOf',
      params: [account],
    }
  })

  const rawTokenBalances = await multicall(erc20ABI, calls)
  const parsedTokenBalances = rawTokenBalances.map((tokenBalance) => {
    return new BigNumber(tokenBalance).toJSON()
  })
  return parsedTokenBalances
}

export const fetchFarmUserStakedBalances = async (account: string, farmsToFetch: SerializedFarmConfig[]) => {
  const wkdLpPoolAddress = getWkdPoolAddress()

  const calls = farmsToFetch.map((farm) => {
    return {
      address: wkdLpPoolAddress,
      name: 'userInfo',
      params: [farm.pid, account],
    }
  })

  const rawStakedBalances = await multicall(wkdLpPoolABI, calls)
  const parsedStakedBalances = rawStakedBalances.map((stakedBalance) => {
    return new BigNumber(stakedBalance[0]._hex).toJSON()
  })
  return parsedStakedBalances
}

export const fetchFarmUserEarnings = async (account: string, farmsToFetch: SerializedFarmConfig[]) => {
  const wkdLpPoolAddress = getWkdPoolAddress()

  const calls = farmsToFetch.map((farm) => {
    return {
      address: wkdLpPoolAddress,
      name: 'pendingWkd',
      params: [farm.pid, account],
    }
  })

  const rawEarnings = await multicall(wkdLpPoolABI, calls)
  const parsedEarnings = rawEarnings.map((earnings) => {
    return new BigNumber(earnings).toJSON()
  })
  return parsedEarnings
}
