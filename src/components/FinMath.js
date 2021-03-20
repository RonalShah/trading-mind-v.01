import randomNormal from 'random-normal';

export const Rounder = (x, dp) => {
   return( Math.floor(x * Math.pow(10,dp))/Math.pow(10,dp))
}

export const BS = (S, r, vol, t) => {
   return(Rounder( S  + (Math.sqrt(t)*((Math.random()-.5) * vol)),2))
}